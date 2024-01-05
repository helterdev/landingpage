import './Users.css';

export default async function Users(){
    
    return (
        <div className="w-full h-48 rounded card-user sm:w-52 sm:justify-between">
            <figure className="flex justify-center py-4 rounded">
                <img className="w-24 h-24 rounded-full" src="/img/bg.webp" alt="test" />
            </figure>
            <div className="text-center">
                <h4 className="font-bold text-lg">Title</h4>
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>
    )
}