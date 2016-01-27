import domainContainer from 'focus-core/definition/domain/container';
import domains from '../config/domain';

export default () => {
    domainContainer.setAll(domains);
}
