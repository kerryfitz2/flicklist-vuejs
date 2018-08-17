
var api = {
  root: "https://api.themoviedb.org/3",
  token: "2585cb8a0484ee62e755608200d0cd07"
}

var flicklistView = new Vue({
	el: '#mount-target',
	data: function() {
		return {
			watchlistItems: [],
			browseItems: []
		};
	},
	methods: {
		discoverMovies: function () {
			fetch(`${api.root}/discover/movie?api_key=${api.token}`)
					.then(resp => resp.ok ? resp.json() : Promise.reject(resp))
					.then((response) => {
						console.log("We got a response from The Movie DB!");
						console.log(response);
						this.browseItems = response.results;
					});
		},
		addMovies: function (movie) {
			this.watchlistItems.push(movie);
		}
	},
	mounted: function() {
		this.discoverMovies();
	},
});
