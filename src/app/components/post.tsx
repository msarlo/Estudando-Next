type PostProps = {
    avatar: string,
    titulo: string,
    resumo: string,
    foto: string
}

export default function Post({avatar, titulo, resumo, foto}: PostProps) {
    return (
        <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="grid grid-rows-2 py-4 px-8">
                <div>
                    <img src={avatar} className="rounded-full h-12 w-12 mb-4" />
                    <a href="#">
                        <h4 className="text-lg mb-3 font-semibold">{titulo}</h4>
                    </a>
                    <p className="mb-2 text-sm text-gray-600">{resumo}</p>
                </div>
                <div>
                    <img src={foto} className="w-full h-50" />
                    <hr className="mt-4" />
                </div>
            </div>
        </div>
  );
}