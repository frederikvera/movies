
//Render the following string to the html using the fetched movies array: 6527 movies fetched
/*
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movies => {
        console.log(movies);


        let h1 = document.createElement("h1")
        h1.innerHTML = movies.length + " Movies fetched";
        document.body.appendChild(h1)

    });

*/

//Render the first movie in the movies array.
// How you do that is up to you. But you could fx just render a string that says
/*
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movies => {

        console.log(movies[0].title + " is a movie from year " + movies[0].year + " it has a rating of "
        + movies[0].rating + " has an amout of " + movies[0].votes + " Votes and a running time of " + movies[0].running_times)


        let Render = document.createElement("h1")
        Render.innerHTML = movies.length + " Movies fetched";
        document.body.appendChild(Render)

    });

*/

//Now render all the movies in a list using ul and li

/*
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movies => {
        document.querySelector("#btn2").addEventListener("click", function () {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].year > 2014) {

                    const title = movies[i].title


                    const year = movies[i].title

                    let Rendertitle = document.createElement("ul")
                    Rendertitle.innerHTML = " Movie name : " + title;
                    document.body.appendChild(Rendertitle)
                }

            }


        })
    });


//5.2 Create a button with the text Get newer movies. When clicked it should only show movies that came out after 2014

*/

fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movies => {



        for (let i = 0; i < movies.length; i++) {
            const title = movies[i].title
            const year = movies[i].year
            const rating = movies[i].rating
            const votes = movies[i].votes
            const running_times = movies[i].running_times



            let Rendertitle = document.createElement("ul")
            Rendertitle.innerHTML = " Movie name : " + title ;
            document.body.appendChild(Rendertitle)

            let Renderyear = document.createElement("li")
            Renderyear.innerHTML = "Year: " + year ;
            document.body.appendChild(Renderyear)

            let RenderRating = document.createElement("li")
            RenderRating.innerHTML = "Rating: " + rating ;
            document.body.appendChild(RenderRating)

            let Rendervotes = document.createElement("li")
            Rendervotes.innerHTML = "Votes: " + votes ;
            document.body.appendChild(Rendervotes)

            let RenderRt = document.createElement("li")
            RenderRt.innerHTML = "Render time: " + running_times ;
            document.body.appendChild(RenderRt)

        }
    });

/*
 let button = document.querySelector("#btn2");
        console.log(button)
        button.addEventListener("click", newMovies);
        function newMovies() {
            console.log("Clicked")
            document.querySelector("ul").innerHTML = ""

  */

//6.3 Create an input element where people can search for a movie. While the user writes something the movies should be updated!

/*
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(movies => {


        let button = document.querySelector("#btn2");
        console.log(button)
        button.addEventListener("click", newMovies);
        function newMovies() {

            for (let i = 0; i < movies.length; i++) {
                const title = movies[i].title
                const year = movies[i].year
                const rating = movies[i].rating
                const votes = movies[i].votes
                const running_times = movies[i].running_times


                let Rendertitle = document.createElement("ul")
                Rendertitle.innerHTML = " Movie name : " + title;
                document.body.appendChild(Rendertitle)

                let Renderyear = document.createElement("li")
                Renderyear.innerHTML = "Year: " + year;
                document.body.appendChild(Renderyear)

                let RenderRating = document.createElement("li")
                RenderRating.innerHTML = "Rating: " + rating;
                document.body.appendChild(RenderRating)

                let Rendervotes = document.createElement("li")
                Rendervotes.innerHTML = "Votes: " + votes;
                document.body.appendChild(Rendervotes)

                let RenderRt = document.createElement("li")
                RenderRt.innerHTML = "Render time: " + running_times;
                document.body.appendChild(RenderRt)

            }
        }
    });
*/
