import { ListItem } from "../ListItem/ListItem"

export function Category(props) {
    const { categories } = props;
    const path = `/list/${categories.category.replace(/\s+/g, '')}`;
    const category = categories.category;
    
    return (
            <div className='category'>
                <h3 className='category__header'>{categories.category}</h3>
                <div className='category__listItemsWrapper'>
                    {categories.products.map(item => {
                        return (
                            <ListItem category={category} src={item.src} name={item.name} key={item.id} path={path} id={item.id} totalAmount={item.totalAmount} />
                        )
                    })}
                </div>
            </div>
    )
}