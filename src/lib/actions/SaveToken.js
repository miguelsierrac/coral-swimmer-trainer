export class SaveToken {
    _apiClient

    constructor(apiClient) {
        this._apiClient = apiClient
    }

    async handle(trainer) {
        await this._apiClient.post(`entrenadores`, {"items": [ {"id": trainer.id, "token": trainer.token} ]})
    }
}