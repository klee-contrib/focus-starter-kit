import {container as domainContainer} from 'focus-core/definition/domain';
import domains from '../config/domain';

export default () => {
    domainContainer.setAll(domains);
}
