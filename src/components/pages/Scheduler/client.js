'use strict'
import { wrap } from 'rest'
import defaultRequest from 'rest/interceptor/defaultRequest'
import mime from 'rest/interceptor/mime'
//import uriTemplateInterceptor from './api/uriTemplateInterceptor'
import errorCode from 'rest/interceptor/errorCode'
import { child } from 'rest/mime/registry'
import { uriList } from './api/uriListConverter'
import { templ } from './api/uriTemplateInterceptor'
import uriListConverter from './api/uriListConverter'

const registry = child();

registry.register('text/uri-list', uriList);
registry.register('application/hal+json', require('rest/mime/type/application/hal'));

export default wrap(mime, { registry: registry })
		.wrap(templ)
		.wrap(errorCode)
		.wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' }});