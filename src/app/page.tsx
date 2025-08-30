'use client'

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import Post from './components/post';
import Spinner from './components/Spinner';

export default function Home() {
  const [dados, setDados] = useState<Array<Postagem> | undefined>(undefined);

  if (!dados) {

    setTimeout(() => {
      setDados(obterDados());
    }, 2000);

    return (
      <Spinner mensagem="Carregando..." />
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-16">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
            {
              obterDados().map(x => {
                return <Post key={x.id} avatar={x.avatar} titulo={x.titulo} resumo={x.resumo} foto={x.foto} />
              })
            }
        </div>
    </div>
  );
}

class Postagem {
  constructor(id: number, avatar: string, titulo: string, resumo: string, foto: string) {
    this.id = id;
    this.avatar = avatar;
    this.titulo = titulo;
    this.resumo = resumo;
    this.foto = foto;
  }
  id: number;
  avatar: string;
  titulo: string;
  resumo: string;
  foto: string;
}

function obterDados() : Postagem[] {
  return [
    new Postagem(1, faker.image.avatar(), faker.lorem.lines(1), faker.lorem.sentence(), faker.image.urlPicsumPhotos()),
    new Postagem(2, faker.image.avatar(), faker.lorem.lines(1), faker.lorem.sentence(), faker.image.urlPicsumPhotos()),
    new Postagem(3, faker.image.avatar(), faker.lorem.lines(1), faker.lorem.sentence(), faker.image.urlPicsumPhotos()),
  ];
}