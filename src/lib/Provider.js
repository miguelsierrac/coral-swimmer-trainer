import { GetTrainer } from "$lib/actions/GetTrainer";
import { SaveToken } from "$lib/actions/SaveToken";
import ApiClient from "$lib/infrastructure/APIClient";
import { Request } from "$lib/infrastructure/Request";

const fetch = new Request()
const apiClient = new ApiClient(fetch)

export default {
    getTrainer: new GetTrainer(apiClient),
    saveToken: new SaveToken(apiClient)
}