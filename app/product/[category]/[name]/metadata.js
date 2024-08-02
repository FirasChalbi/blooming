export async function generateMetadata({ params }) {
    const { name, category } = params;
    const decodedName = decodeURIComponent(name);
    const decodedCategory = decodeURIComponent(category);
  
    const res = await fetch(`https://bloomingagriafrica.tn/api/products/${category}/${name}`);
    const product = await res.json();
  
    const title = `${product.name} | Blooming Agri Africa`;
    const description = product.description;
    const commonKeywords = 'Agriculture, Products, Farming, Blooming Agri Africa';
    const dynamicKeywords = `${product.name}, ${product.category}, Blooming Agri Africa`;
    const keywords = `${dynamicKeywords}, ${commonKeywords}`;
    return {
      title,
      description,
      keywords,
    };
  }
  