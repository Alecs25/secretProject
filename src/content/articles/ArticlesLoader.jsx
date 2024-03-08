import { useEffect, useState } from "react";
import * as data from "./articoli.json";
import { createContext } from "react";
export const ArticlesContext = createContext(null);

export function ArticlesLoader({ children }) {
	const [articles, setArticles] = useState(data.posts);
	const store = [articles, setArticles];
	useEffect(() => {}, []);

	return <ArticlesContext.Provider value={store}>{children}</ArticlesContext.Provider>;
}
