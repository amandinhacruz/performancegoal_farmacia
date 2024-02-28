import { Link } from "react-router-dom"

function Home() {

    return (
        <>

            <div id="container" className="flex justify-center py-15 bg-[#F4998D] text-gray-50">
                <div id="subcontainer" className="container grid grid-cols-2">

                    <div id="text" className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Farmácia do Brasileiro</h2>
                        <p className="text-xl">Saúde e bem estar para todes</p>

                        <div className="flex justify-around gap-4 ">
                          
                            <Link to='/categories' className="rounded border-gray-50 border-solid border-2 px-4 py-2">
                            Pesquisar por Categoria
                            </Link>
                        </div>
                    </div>

                    <div id="image" className="flex justify-center">
                        <img src="https://cpage.sfsu.edu/sites/default/files/images/pharmacy-shelves-square.png" alt="Imagem da página Home" className="w-4/5" />

                    </div>

                </div>
            </div>
            </>
)
}

export default Home

