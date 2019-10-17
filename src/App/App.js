import React from 'react';
import Timer from  "../Timer/Timer.js";


class App extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClick(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render()
     {
         const style =   {
             textAlign: 'center',
             fontSize: 200
         };
         const p = this.state.isOpen && <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores, aspernatur aut cum distinctio, dolore enim illum laboriosam numquam pariatur quas quia ratione rem repudiandae tempore tenetur vel voluptate voluptates!</span><span>Accusamus doloremque esse eum, fugiat laboriosam modi nulla sapiente tempora. Blanditiis iure laboriosam libero magni maiores molestias nesciunt qui quod repellat velit. Ad consequuntur, eveniet. Culpa ea enim itaque nam!</span><span>Accusantium aliquam aspernatur commodi consectetur delectus ea esse ex explicabo impedit laudantium maxime nobis nostrum obcaecati officiis omnis optio, quam quia quidem quod reiciendis repellat saepe sunt ullam veritatis, vitae.</span><span>Amet atque dignissimos dolorum earum eligendi et, eveniet explicabo facilis hic illo, in iste iusto mollitia necessitatibus neque nostrum omnis quaerat quod repudiandae tempora tempore temporibus unde voluptatum. Placeat, possimus.</span><span>Ab accusamus aperiam at cum dolore dolorum eaque est exercitationem fugiat ipsa ipsum iste mollitia nostrum obcaecati omnis perspiciatis, placeat quibusdam quos repellendus sit tempora tempore ullam veniam vitae voluptatem?</span><span>Debitis iste labore nisi officiis quos, tempora ut veritatis. Debitis dolores eius expedita id iusto maiores necessitatibus, neque nobis non optio perspiciatis possimus quas, quis rerum sit sunt totam ullam.</span><span>At cum deleniti et ipsam nobis odio quasi sit unde? Aliquam architecto aut error ipsa ipsam molestiae recusandae repellendus? Aspernatur beatae dicta et nemo, nisi optio recusandae rerum totam voluptates?</span><span>Ab accusantium alias blanditiis commodi consequatur, deleniti dolore dolorum eaque exercitationem explicabo facilis hic id in incidunt ipsam labore laudantium modi numquam omnis pariatur quaerat, quidem quisquam, recusandae soluta ut?</span><span>A aliquam autem, commodi consequatur nemo nesciunt provident quos, reprehenderit tempora tempore ullam ut voluptatem. Animi deleniti, eaque eos error excepturi explicabo, nihil odio perferendis quasi quia quibusdam quis? Excepturi.</span><span>Adipisci aliquam commodi consectetur culpa eaque eius, et eveniet incidunt ipsam nesciunt placeat provident, quas quibusdam sunt voluptatem. Assumenda deleniti dolor iure laudantium officia placeat quo saepe, sit ut vero!</span></p>
            return (
                <div>
                    <h1 style={style}> State into React.js</h1>
                    <button onClick={this.handleClick.bind(this)}> Button </button>
                    {p}
                    <Timer/>
                </div>
            )
    }
}

export default App;
