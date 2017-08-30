function Header() {
  return (
    <div className="header">
      <h1>Welcome to React Transportanion</h1>
      <span>The best place to buy vehicles online</span>
    </div>
  )
}

function FilterForm() {
  return (
    <div className="filter-form">
      <h2>Choose your option</h2>
      <span>New only</span>
      <input type="checkbox" checked /><br/>
      <label>Select Type
        <select>
          <option value="All">All</option>
          <option value="Cars">Cars</option>
          <option value="Trucks">Trucks</option>
          <option value="Convertibles">Convertibles</option>
        </select>
      </label>
    </div>
   )
}

function ProductList(props) {

  return (
    <div className="product-list">
      <ul>
        <table>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Model</th>
              <th>Price</th>
              <th>Buy</th>
            </tr>
            <tr/>
            <tr>
              <td>{props.year}</td>
              <td>{props.model}</td>
              <td>{props.price}</td>
              <td><button>Buy Now</button></td>
            </tr>
            <tr/>
          </tbody>
        </table>
      </ul>
    </div>
  )
}


function App(props) {
  const cars = [
    {type: 'Cars', year: 2013, model: 'A', price: '$320000'},
    {type: 'Cars', year: 2011, model: 'B', price: '$4400'},
    {type: 'Cars', year: 2015, model: 'B', price: '$15500'}
  ]

    const trucks = [
    {type: 'Trucks', year: 2014, model: 'D', price: '$18000'},
    {type: 'Trucks', year: 2013, model: 'E', price: '$5200'}
  ]

   const convertibles = [
    {type: 'Convertibles', year: 2009, model: 'F', price: '$2000'},
    {type: 'Convertibles', year: 2010, model: 'G', price: '$6000'},
    {type: 'Convertibles', year: 2012, model: 'H', price: '$12500'},
    {type: 'Convertibles', year: 2017, model: 'M', price: '$50000'}
  ]

  return (
    <div>
      <Header />
      <FilterForm />
      <h2>{cars[0].type}</h2>
      <ProductList year = {cars[0].year} model = {cars[0].model} price = {cars[0].price} />
      <ProductList year = {cars[1].year} model = {cars[1].model} price = {cars[1].price} />
      <ProductList year = {cars[2].year} model = {cars[2].model} price = {cars[2].price} />
      <h2>{trucks[0].type}</h2>
      <ProductList year = {trucks[0].year} model = {trucks[0].model} price = {trucks[0].price} />
      <ProductList year = {trucks[1].year} model = {trucks[1].model} price = {trucks[1].price} />
      <h2>{convertibles[0].type}</h2>
      <ProductList year = {convertibles[0].year} model = {convertibles[0].model} price = {convertibles[0].price} />
      <ProductList year = {convertibles[1].year} model = {convertibles[1].model} price = {convertibles[1].price} />
      <ProductList year = {convertibles[2].year} model = {convertibles[2].model} price = {convertibles[2].price} />
      <ProductList year = {convertibles[3].year} model = {convertibles[3].model} price = {convertibles[3].price} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
