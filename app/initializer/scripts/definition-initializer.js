import {container as entityContainer} from 'focus-core/definition/entity';
import entitytDefinitionConfig from '../../config/entity-definition';

export default () => {
    console.log('|--- ENTITIES DEFINITION');
    entityContainer.setEntityConfiguration(entitytDefinitionConfig);
    const declaredEntities = Object.keys(entitytDefinitionConfig);
    console.log('   |--- Declared entity definitions :', declaredEntities);
}
