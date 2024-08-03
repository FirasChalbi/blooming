import connectToDatabase from '../lib/mongodb';
import { Product } from '../models/Products';

 
export default async function sitemap({ }) {
    await connectToDatabase();
    const data = await Product.find({});
    const products = data.map((item) => ({
        url : `https://bloomingagriafrica.tn/product/${encodeURIComponent(item.category)}/${encodeURIComponent(item.name)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))
    
    return [
        {
            url : 'https://bloomingagriafrica.tn',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url : 'https://bloomingagriafrica.tn/propos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url : 'https://bloomingagriafrica.tn/product',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url : 'https://bloomingagriafrica.tn/galery',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url : 'https://bloomingagriafrica.tn/service',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url : 'https://bloomingagriafrica.tn/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...products
    ]

}