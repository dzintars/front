interface MyApp {
  api: string;
  localApi: string;
}

interface Window {
  MyApp: MyApp;
}
