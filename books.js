document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#booknames");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const BookId = document.getElementById("bookid").value;
      const Booktype = document.getElementById("booktype").value;
      const Booktitle = document.getElementById("booktitle").value;
      const Pagecount = document.getElementById("pagecount").value;
      const Copyright = document.getElementById("copyright").value

      function fetchData() {
        fetch("http://localhost:3000/find", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            BookId: BookId,
            BookType: Booktype,
            BookTitle: Booktitle,
            Pagecount: Pagecount,
            Copyright: Copyright
          })
        })
      }
    })
  })