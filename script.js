setTimeout(() => {
  document.querySelectorAll("#video-title").forEach((value) => {
    value.addEventListener("mouseover", (event) => {
      ;[...document.querySelectorAll("#video-title")].forEach((v) => {
        if (v.text === event.target.text) {
          v.classList.add("superStyle")
        }
      })
    })
    value.addEventListener("mouseout", (event) => {
      ;[...document.querySelectorAll("#video-title")].forEach((v) => {
        if (v.text === event.target.text) {
          v.classList.remove("superStyle")
        }
      })
    })
  })
}, 1000)
