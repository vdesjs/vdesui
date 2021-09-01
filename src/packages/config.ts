export function defineConfig(config: UserConfig): UserConfigExport {
  return config;
}

export type UserConfigExport = UserConfig;

export interface UserConfig {
  site: {
    defaultLang: string;
    versions: Versions[];
  };
  
  locales: Record<string, LocaleOption>;
}

export interface Versions {
  name: string;
  link: string;
}

export interface LocaleOption {
  langLabel: string;
  header: HeaderOption[];
  docs: DocsOption;
  navs: NavOption[];
  apis: ApiOption[]
}

export interface HeaderOption {
  name: string;
  cName?: string;
  path: string;
}

export interface DocsOption {
  name: string;
  packages?: PackagesOption[];
}

export interface ApiOption {
  name: string;
  demoShow?: boolean;
  packages?: {
    name: string,
    path: string
  }[];
}

export interface PackagesOption {
  name: string;
  cName?: string;
  show?: boolean;
  desc?: string;
  author?: string;
  isLink?: boolean;
  type?: PackageType;
}

export type PackageType = 'component' | 'methods'

export interface NavOption {
  name: string;
  demoShow?: boolean;
  packages: PackagesOption[];
}
