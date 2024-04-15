import { getDestinations } from '../mock/destination';

export default class DestinationModel {
  #destinations = getDestinations();

  get destinations() {
    return this.#destinations;
  }

  getDestinationById(id) {
    return this.#destinations.find((dest) => (dest.id === id));
  }
}
