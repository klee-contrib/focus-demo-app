import i18next from 'i18next';
import {intializeTranslation} from 'focus-application/translation';
import componentsFr from 'focus-components/translation/resources/fr-FR';
import demoFr from '../../i18n/fr-FR';

export default () => {
    console.info('|--- TRANSLATIONS');
    intializeTranslation(i18next, 'fr-FR', [demoFr, componentsFr]);
};
