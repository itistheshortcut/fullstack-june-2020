
// Variable examples
// const constVariable = 3
// let myVariable = 3
// myVariable = "Javascript"
// console.log(myVariable, constVariable)

// Function examples
// function showMessage() {
//     let message = "Hello everyone"
//     alert(message)
// }

// let globalMessage = "Hello global scope"

// showMessage = () => {
//     let message = "Hello everyone"
//     alert(message)
// }

// showMessage()
// // alert(globalMessage) // Can't access message variable out of scope



// If Else examples
// let myIceCream ="Chocolate"

// function iceCreamChoice() {
//     if(myIceCream="Chocolate") {
//         alert("Let's be best friends")
//     } else if (myIceCream="Vanilla") {
//         alert("we can be buddies")
//     } else {
//         alert("I don't want to be friends")
//     }
// }

// iceCreamChoice = () => {
//     let response = (myIceCream = "Chocolate") ? ("Let's be friends")
//     : (myIceCream = "Vanilla") ? ("We can be buddies")
//     : "I don't want to be friends"
// }

// Events example
// document.querySelector('p').onclick = function () {
//     alert("Stop poking me")
// }

// Solution: Changing text element
// const changeText = document.querySelector('p')
// changeText.textContent = "New text"


// Solution: Switch image onClick
// let currentImg = document.querySelector('img')

// currentImg.onclick = () => {
//     let currentSrc = currentImg.getAttribute('src')

//     if (currentSrc === "data:image/jpeg;base64,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") {
//         currentImg.setAttribute('src', 'data:image/jpeg;base64,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')
//     } else {
//         currentImg.setAttribute('src', "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AvQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADkQAAIBAwIDBQUGBgIDAAAAAAECAAMRIQQSMUFREyJhcZEFMlKBoQYUM7HB0SNicoKS8BVCNEPh/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACURAAICAQMEAgMBAAAAAAAAAAABAhESAyExBBNBUWGhFFJiQv/aAAwDAQACEQMRAD8Ac9j68jalRbi/HmJ6ugiVqQ7Kw+cx9B7MAANrMOc2NIp07d7AnnyllK47HpRjjGmEq6fZSDEWMBtj1dlqIGDk24KYBaZbgJ26LqG5wasbnsgO2RthyljadslrJUA2TtsPsnFJjULlJUrGdsgpNYHEVKSpSN7JUpCmTkhQpBmnHSkoUj2ScRJqcG1OPFJQpCmScBE04NkAFziPtTgnoBhYiNZJ6YmpVvdINpfbfhDpp1QWVQIVaQHKHIXtIy9RXFHFiW5CZlerUq3JE3tVQapbaLfKCT2aGXvDjFuy0Uo8Hnk01bUHugmN0fYzMt2GZ6HTaFaKBbRpaYAwIchXDLkOibZdail9hbvdDGQgHeI4RV0D1SygTz5zUfB7enpuXkZ7MrxEsFZQCOBnUUqMtr38ekYWiUxvJvxvAtS1wZ6ai+RfbmSEvGTTHKSKctZKhbs/CcUjfZzuy8JrNQnskCncdLRw0rwbLbFoG7WwUle4oRnA4Smxr5tbwjIp2nMgIsY0E0tyeo03shbaDzlSsP2YBvbM4rKEWhUpKlI0VldsNiOIqUlSkaK+EqV8JrFxFSmZISMFJG2GwYgQknZD7Z1hzms2IIJLbZLVaaDJElWVhcH6QWHBo0doIsDAUtIy1S18S9CvRrm6VAxsDg8jGGqWNhZiBwBzOBtS5PWVx4CBRObAJ6QaV0Jse75wykEYIgUlHgVpvkXWuGa2055xpRcSVRPhEIEBEopMWWPgqFvJ2S6pY+EJtjq2JYuydIvUtcjnHXBtiIumwsxyx5CJKeLHjFSBkHjaUN+kEK6oxLzn1dMUywNzblylITtCz06ZY3GW4TiMRXS6wPUalcsOVxzjrWANyI+RLEFaQRO3g8Byga2pSm+1zY+cNi4BSJUiAOsp7wtzkXuJYVlf3Ln5TWDAu1hBVaqUl3twEDqW2m7VSL+ERrOjKVDu14bBgPU9bQqNtBIPjDlkZSLkX5zN0enUZZLE8MXmjsuALfSGwKLKjTUr3yfnJKkYCYkqpGADL7W8YLQXFs+beyftU/s1qYTRsioAHy3f88Y8pq1ft2rUXNLStSrVF2mpcm3H95un2ZpGH4fqpkD2TpCPwl+eJxNR9HoLL2Yml+29SjpEU6Zata/vHp5dZ7D2V9pND7QReydFfnTLAMPlMkeydJf8EH+4wo9laci40yNbqoiYopvVM9SmqQ8rQ6V08Z5ajp+xNlDoLco0jlRcVHI8THxaJtRPTI4YS8waVeovxesbFaoyXu0otRxVMn2vRoO1hEtRUBBBNojqK5uQXN5k6iuSwXtePQmSnlN8jxgojWqp3JKt9YhU3j3Gz5xKu9z77HyJirrU5E+v/wBldPSfsXV6iK2o2NNWr0DZCpB43Eu1WqwIZhtPFQTPPjDAE8Rf3TJCAi9yOuDiX7T9nI+qj+p6Kg4o3stycXvKVNlStvqbTbxMwRT3JuLH0lCLNxYDmcw9p+yb6tfqeoRqa+5tvKl1L7i2BynnQgDWZjc8BfjOCJa/aEcoez8g/Mr/AD9m/V7OpxJ/ylKQpUzcH6zBZFF71iIPs0cD+NUzwsSIy0fkm+t/n7PUjUADiJP3kc2M8utKmpt2zXPUkzht5V1Bxx4zdlezfmvzH7PUfeAefpO+8DqZ5ncqmwNRv6UYye0QcTVF/wCQiHsoD674+z0qVQT3ib+UODTOTb5iTU0aWwWB84D7lWJFtQNvQof3nC6Z7KbGVVCeAhOyQ84uul1A/wDcp/tI/WXNHUW96mfWLS9jWwo06HofnJajQK7bAeWIpVXWKP4a0fkYOm2ruCajeWzHrKKO12Sct+B+ho6W66t6OY42lXsrEtbwcxPTLqFALMWbput9I21eoiZUH+4RXF3yaxavpUK2AJHTcf3mdqdKChAA8iI5qdRU2m4JBGAGt+USramo20AIOpFzb6TKEn5DnFLczqukVrq1QgX4AWiVf2dTwwqOc4vNQpUsxRD/AJAXgmVx721R1ve86IqSOaeM/Bmj2eGUBF3DngfrLNoOlIIeduNumRNOljjLtt5ER+4yD6eLMVNCaZaym17jIxFK10YoqvY8gABf5Gek2i3e4eEEaYZr2BzxjLUJz6W1SZ5jZrGIXstpBvuFYgD0kbK4qnvsj8Lhr4/3rPUin4AwdSiG/wCpYdDmUWqjnl0b9nnV7LaRUqjGTlWv9MSj1KJ741q8bEbVx9JsajQ6SpfdS2sR3jtH7RT/AIXSNYjBHNbftHU0c0+n1ExEkVO9R1lIg8QcW+sMml+8OAtZOhKMLxn/AIGixvTweZvY+ogqv2eqE3WsD4OM+ohyXsTszXKIq+z6rEH+NU5/9W+klfZ+o43rL4Ylk9j6gN+LWVuoqbh9Y2PZ+vIzqXuMYdh+sOXyDtW94s9sSJylekV3EczJVnbgB5meMz6xIa3r0kNUQccecoqNzf0xONMdBBVh4B1TQr2DJvIwLKcfOdT0am3eq2/mINvWGSwhQRDuuANpnUtHTOGZm87ftDnToi4S/k5kU2hy3dmUmuRGtzI1NNFvuesvmAR6xNim26VGKn4bH8psVzcTJ1enpVgVemjA9RDGe+6GwtbCjGnnuvbqwtBNWpKCFdS1sXaMUNPQoFzbbTbDi5It5Sn3fTVGB01SgB/LY/lOmErITVcmYqW1AZ3pMT0OZYbiVRtQGJN9qUznp/uJpaqitCmCQticlf8AbxWmyre1MjqbZ+spZHGzi6YBJ7T4QOPpe0tvU7AhLFsjNrDrLU27420mtyu4FpL06hAK0aYPg1/0m2ZqaLWORkfKQ6kYzfykV9SdIo3Datrk8cmBp6yod3aHbmwuBa3hDQDiQW23s/wlhmT2I3ZHpCOdNuADA4vYm9oSkBUfZ7rW3AbuImNS8gxT5Zl2S3E2EuqbW2nBJ5wmxT4Ec4DYpi48gfKXDnmIfb0Av1Eix5gHxteHIV6aHjaSpAMrIE4Wj0kHDzicQNzJ3RkhWWvLBjBXlgYzoUZptaFNTEUDWl92PKTasYiq+IlVbMPUYHmYrUaZDAySDcRepQoVPxKNNj1K5hWaDLS0WRkgxrU0oCk9J3QcCpuVi5r6QGxrFf6qbL+chmMrxj2I4jCNpyO5qqBP9cMrUtv/AJFHzuJnlV5qPSd2afAvpDkgODNCpRut9iPf4ckxNqRub02CWsdxv9IMU0W2xQp6jFocaisvCq/zN/zmzQMGL6WlSSqzMFU8AVBtaOPqdNS2069nzxC3AlF1NS/e2OPFbfUQ/bUqi7XVl8sw5rwzPTa5Qakqubq4z7pA5SrULE8COZMhFoBNgdXAyoY7Ssv2ZXabmx4Bj+sNi4+glGkbWZR/lBv3GIKgeck7nYE2pnwbjLFfipsfEcPrCBlryeUqpvJJtOQ7SZEreQTCAtedeDLWkb7m0JgytmcXJwL8ekGW2+MhiVFzbOBaIwl3YEH8+UWqEfpLu1lBMXrm/nCEq5g+MlssRnu5kcRGFItOncBOGdomsWjrTpPK/WcOM1ho6QRLAe75ThwEDYUiljJzLASwEUcgE8IxSrtTFhYr8LZEFtlgsKbFcUN0XolrntF8L7hDmnTY3pVwq9MTPGJa/WVWp7JPSXg//9k=")
//     }
// }



