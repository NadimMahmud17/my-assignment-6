const loadData = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // console.log(searchText);
// clear input fild
    searchInput.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // spinner item
    const spinner = document.getElementById("spiner");
    spinner.classList.remove("d-none");
    // data loading
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.docs));

}
let display = item => {
  spinner.classList.add("d-none");
    const Container = document.getElementById('search-result');

    item.forEach(items => {
        const div = document.createElement('div');
        div.classList.add("col-md-6");
        div.innerHTML = `
        <div class="rounded overflow-hidden border p-2">
        <img src="https://covers.openlibrary.org/b/id/${items.cover_i}-M.jpg" width="200">
      </div>


      <!-- Body -->
      <div
        class="py-2 d-flex justify-content-between align-items-center d-md-block text-md-center">
      
            <h3>Book Name: ${items.title}</h3>
            <p>By: ${items.author_name?items.author_name.slice(0, 1) : 'more not found'}</p>
            <p>Publish date: ${items.first_publish_year?items.first_publish_year : 'year not found'}</p>
            <p>Publisher: ${items.publisher?items.publisher.slice(0, 1) : 'publisher not found'}</p>
        
      </div>`;
        Container.appendChild(div);
      

    })

}

