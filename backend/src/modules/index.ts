import { createApplication } from 'graphql-modules';
import { helloModule } from './hello.module.graphql';

export const application = createApplication({
    modules: [helloModule],
});