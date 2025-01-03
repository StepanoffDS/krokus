import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./react/pages/home-page.tsx";
import CategoryPage from "./react/pages/category-page.tsx";
import MainContainer from "./react/components/containers/main-container.tsx";
import ProductPage from "./react/pages/product-page.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<MainContainer />}>
					<Route index element={<HomePage />} />
					<Route path="/category/:slug" element={<CategoryPage />} />
					<Route path="/product/:slug" element={<ProductPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
