interface File {
  type: string;
  size: string;
}

interface Folder {
  type: string;
  children: (File | Folder)[];
}

interface MainFolder {
  main: Folder;
}

interface SrcFolder {
  src: Folder;
  children: [];
}

interface DataItem {
  [key: string]: File | Folder;
}

export interface Data {
  [index: number]: DataItem;
}
