document.addEventListener("DOMContentLoaded", function () {
    const topicInput = document.getElementById("temaentrada");
    const addButton = document.getElementById("agregarboton");
    const topicList = document.getElementById("listadetema");

    addButton.addEventListener("click", function () {
        const topic = topicInput.value;
        if (topic) {
            addTopic(topic);
            topicInput.value = "";
        }
    });

    function addTopic(topic) {
        fetch("https://picsum.photos/200/200") // Obtiene una imagen aleatoria de Lorem Picsum
            .then(response => {
                const imageUrl = response.url;
                const listItem = createTopicListItem(topic, imageUrl);
                topicList.appendChild(listItem);
            })
            .catch(error => {
                console.error("Error al obtener la imagen:", error);
            });
    }

    function createTopicListItem(topic, imageUrl) {
        const listItem = document.createElement("li");
        listItem.id = "estilocss"
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Imagen de tema de estudio";
        const completeButton = document.createElement("button");
        completeButton.innerText = "Completar";
        completeButton.classList.add("complete-button");
        completeButton.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Eliminar";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(image);
        listItem.appendChild(document.createTextNode(topic));
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        return listItem;
    }
});
