
export default class Adapter {
  loader;
  reader : any ;
  config;
  api : any ;
  constructor(loader : any , config : any , api : any) {
    this.loader = loader;
    this.config = config;
    this.api = api ;
  }


public async upload(): Promise<any> {
  const value = await this.loader.file;
  await this.uploadServer(value) ;
  return this.read(value);
}

  read(file : any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function () {
        resolve({ default: reader.result });
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.onabort = function () {
        reject();
      };
      reader.readAsDataURL(file);
    });
  }

  async uploadServer(file :any) {
    return new Promise(async (resolve, reject) => {
      const formData = new FormData();
      formData.append('image', file);

      (await this.api.post('/add_image', formData)).subscribe((response: any) => {

        console.log(response);

          resolve({
            default: response.imageUrl
          });
        }, (error: any) => {
          reject('Upload failed');
        });
    });
  }

  abort() {
    if (this.reader) {
      this.reader.abort();
    }
  }
}

