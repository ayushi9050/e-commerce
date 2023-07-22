setInterval(() => {
        var color = Math.floor(Math.random() * 16777215).toString(16)
        document.getElementById('space').innerHTML = `<h1> #${color}</h1>`
        document.getElementById('space').style.color = '#' + color
    }

    , 10)