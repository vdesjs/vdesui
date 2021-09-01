import { useRoute } from 'vue-router';

const isActive = (name: string) => {
  const route = useRoute();
  console.log(route.path);
  const names = route.path.split('/');
  name = name.toLowerCase();
  if (names.indexOf(name) != -1) {
    return true;
  } else {
    return false;
  }
};

export function useActive() {
  return {
    isActive
  };
}
