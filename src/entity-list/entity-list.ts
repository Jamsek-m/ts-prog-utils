export class EntityList<E> {
    public readonly _count: number;
    public readonly _entities: E[];
    
    /**
     * Creates empty list
     */
    public static empty(): EntityList<void> {
        return new EntityList([], 0);
    }
    
    /**
     * Creates entity list
     * @param entities list of entities
     * @param count count of all entities (obtained from backend). If no count is provided, it defaults to length of entities array
     */
    public static of<E>(entities: E[], count?: number): EntityList<E> {
        if (count) {
            return new EntityList<E>(entities, count);
        }
        return new EntityList<E>(entities, entities.length);
    }
    
    private constructor(entities: E[], count: number) {
        this._entities = entities;
        this._count = count;
    }
    
    public get entities(): E[] {
        return this._entities;
    }
    
    public get count(): number {
        return this._count;
    }
}
