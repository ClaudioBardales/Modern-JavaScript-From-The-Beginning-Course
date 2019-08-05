class GitHub {
    constructor() {
        this.client_id = '3e81526458c2f40eabdd';
        this.client_secret = 'f41b461be93e4c09bed473e05a7531bcb01ac76a';
        this.repos_count = 5;
        this.repos_sort = 'Created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret = ${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort="${this.repos_sort}"&client_id = ${this.client_id}&client_secret = ${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}