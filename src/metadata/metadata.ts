import axios, { AxiosError, AxiosProgressEvent } from 'axios';
import FormData, { EventEmitter } from 'form-data';

import { Metadata as MetadataType, validateSchema } from './validate';

export type Metadata = MetadataType;

type HttpResponse = { response: unknown; error: string };

const API_URL = 'https://api.questchains.xyz';

interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
  readonly webkitRelativePath: string;
}

interface UploadOptions {
  label?: string; // used for identifying the upload object in events
  apiUrl?: string;
}

export class MetadataUploader extends EventEmitter {
  uploadMetadata = async (metadata: MetadataType, { label, apiUrl = API_URL }: UploadOptions): Promise<string> => {
    const valid = validateSchema(metadata);
    if (!valid) throw new Error('Invalid Metadata Schema');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      onUploadProgress: (event: AxiosProgressEvent) => {
        this.emit('progress', { progress: event, label });
      },
    };

    try {
      const res = await axios.post(`${apiUrl}/upload/json`, metadata, config);
      return res.data.response;
    } catch (error) {
      throw new Error(((error as AxiosError).response?.data as HttpResponse).error);
    }
  };

  uploadFiles = async (files: File[], { label, apiUrl = API_URL }: UploadOptions): Promise<string> => {
    const formData = new FormData();
    for (let i = 0; i < files.length; ++i) {
      formData.append(files[i].name, files[i]);
    }

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      onUploadProgress: (event: AxiosProgressEvent) => {
        this.emit('progress', { progress: event, label });
      },
    };

    try {
      const res = await axios.post(`${apiUrl}/upload/files`, formData, config);
      return res.data.response;
    } catch (error) {
      throw new Error(((error as AxiosError).response?.data as HttpResponse).error);
    }
  };
}
