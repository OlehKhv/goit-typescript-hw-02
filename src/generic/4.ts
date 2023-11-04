/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Article {
    title: string;
}

class Component<Article> {
    constructor(public props: Article) {}
}

class Page extends Component<Article> {
    pageInfo() {
        console.log(this.props.title);
    }
}

export {};
