import React from "react";
import './Home.css';
import home_page_image from '../images/pictures/camino_home_page2.jpg'

function Home () {
    return (
        <div>
            <h1>Home Page</h1>
            <div className="container1">
                <p className="text1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae necessitatibus nostrum totam maiores possimus quidem fuga id quod nam consectetur harum hic iusto aliquid sed ut, ullam praesentium labore unde quos quam suscipit dolores voluptate? Qui accusantium recusandae molestias obcaecati neque consequuntur architecto maiores quos non deleniti minus autem cumque, minima velit consequatur beatae nemo. Autem et illum, deleniti veritatis corporis quis amet, maiores quo nobis ducimus natus accusantium? Et illo libero possimus, alias reprehenderit asperiores vel non inventore commodi?</p>
                <img src={home_page_image} alt="start of Camino at Roncesvalles" width="49%"/>
            </div>
        </div>
    )
}

export default Home;