import axios from "axios";

const httpService = axios.create({
  baseURL: `/`,
});

// /* Request */
// httpService.interceptors.request.use(tokenInterceptor)
// httpService.interceptors.request.use(platformInterceptor)
// httpService.interceptors.request.use(companyInterceptor)
// httpService.interceptors.request.use(userInterceptor)
// httpService.interceptors.request.use(mobileInterceptor)
// /* Response */
// httpService.interceptors.response.use((response) => response, statusInterceptor)
// httpService.interceptors.response.use(runSimpleMapperInterceptor)
/* Headers */
httpService.defaults.headers.common.Accept = "*/*";

export { httpService };
