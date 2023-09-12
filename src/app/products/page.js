import BambooProduct from "@/component/core/pages/Home/bambooProduct/bambooProduct";
import ClayProduct from "@/component/core/pages/Home/clayProduct/clayProduct";
import GlassProducts from "@/component/core/pages/Home/glassProduct/glassProduct";

const Products = () => {
    return (
        <>
            <GlassProducts isProductsPage={true} />
            <ClayProduct isProductsPage={true}/>
            <BambooProduct isProductsPage={true} />
        </>
    );
};

export default Products;