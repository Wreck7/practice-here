function cards(title, cName, views, months, duration, thumbnail){
    function intToKM(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M'; // Convert to millions
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'k'; // Convert to thousands
        } else {
            return views.toString(); // Return the same as string
        }
    }
        // console.log(intToKM(2930014));
        // console.log(months)
        const card = document.createElement("div");
        card.innerHTML = `<div class="card">
          <div class="img-dur">
            <img width="270px"
              src="${thumbnail}"
              alt="image"
            />
            <div class="duration">${duration}</div>
          </div>
          <h2 class="title">${title}</h2>
          <p class="cName">${cName}</p>
          <ul class="info">
              <li class="views">${intToKM(views)} views</li>
            <li class="months">${months} months ago</li>
          </ul>
        </div>`
        document.querySelector(".container").appendChild(card);
}
cards("Learning JavaScript logic with me!", "CodeWithEeshu", 7014799, 17, "10:09", "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces")
cards("Learning JavaScript logic with me!", "CodeWithEeshu", 7014799, 17, "10:09", "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces")
cards("Learning JavaScript logic with me!", "CodeWithEeshu", 7014799, 17, "10:09", "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces")
cards("Learning JavaScript logic with me!", "CodeWithEeshu", 7014799, 17, "10:09", "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces")