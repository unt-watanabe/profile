export interface Data {
  includes: [];
  items: [];
}

export interface Items {
  fields: {
    snsOrder: number;
    snsLink: string;
    snsIcon: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    snsName: string;
  };
  metadata: object;
  sys: object;
}
