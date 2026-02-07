import React, { useState, useEffect } from 'react';
import Handlebars from 'handlebars';
import { products } from '../data';

const Homework4_6 = () => {
  const [productList, setProductList] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

  const source = `
    <ul class="product-list" style="list-style: none; padding: 0;">
      {{#each this}}
        <li class="product-item" style="background: white; margin-bottom: 15px; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); color: #333;">
          <h2 class="name" style="margin: 0 0 10px 0; color: #1a73e8;">{{name}}</h2>
          <p class="price" style="font-weight: bold; font-size: 1.2rem; color: #28a745; margin-bottom: 5px;">Price: $ {{price}}</p>
          <p class="description" style="color: #666; line-height: 1.5;">{{description}}</p>
        </li>
      {{/each}}
    </ul>
  `;

  const template = Handlebars.compile(source);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductList(filtered);
  }, [searchTerm]);

  return (
    <div style={{ padding: '80px 20px', maxWidth: '600px', margin: '0 auto', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>Каталог товарів</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="🔍 Пошук товарів за назвою..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            borderRadius: '12px',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            outline: 'none'
          }}
        />
      </div>

      <div 
        className="products-container"
        dangerouslySetInnerHTML={{ __html: template(productList) }} 
      />
      
      {productList.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white', background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '10px' }}>
          <h3>Товарів не знайдено 😕</h3>
          <p>Спробуйте змінити запит.</p>
        </div>
      )}
    </div>
  );
};

export default Homework4_6;