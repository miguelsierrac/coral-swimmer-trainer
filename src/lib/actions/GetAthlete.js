export class GetAthlete {
    _apiClient

    constructor(apiClient) {
        this._apiClient = apiClient
    }

    async handle(id) {
        let remote = await this._apiClient.get(`deportistas`, {'documento': id})
        return this.map(remote.deportistas[0])
    }

    map(remote) {
        return {
            "id": remote.id,
            "forename": remote.nombre,
            "surname": remote.apellido,
            "identification": remote.documento,
            "phone": remote.telefono,
            "start_date": remote.fecha_inicio,
            "expiration_date": remote.fecha_vencimiento,
            "remaining_days": remote.dias_restantes,
            "photo": remote.foto,
            "token": remote.token
        }
    }
}