import axios from 'axios';
import config from './config';

class HTTP {
	constructor() {
		this.axios = null;
		this.config = config;
		this.configuration();
	}

	configuration() {
		this.axios = axios.create({
			...this.config,
		});
	}

	async get() {
		return await this.axios.get();
	}
}

export default new HTTP();
