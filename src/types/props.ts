export type Page = {
  newPage: (page: number) => void;
  activePage?: number;
  countPage?: number;
  error: boolean;
};
