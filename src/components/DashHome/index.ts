
import { ref } from 'vue';
import type { IFeature } from './interface';
import { featuresData } from './db';

export const useDashHome = () => {
    const features = ref<IFeature[]>(featuresData);
    
    const abrirRecursoPrincipais = (feature: IFeature , router: any) => {
      if (feature.blank) {
        window.open(feature.redirect, '_blank');
      } else {
        router.push(feature.redirect);
      }
    };
    
    return {
      features,
      abrirRecursoPrincipais
    }
}
