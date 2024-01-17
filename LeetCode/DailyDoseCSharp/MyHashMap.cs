public class MyHashMap {
    private const var Capacity = 10000;
    private const LinkedList<KeyValuePair<int, int>[] map = new LinkedList<(int key, int value)>[Capacity];
    
    private int Hash(int key)
    {
        return key % Capacity;
    }

    public void Put(int key, int value) {
        var hash = Hash(key);
        var node = new KeyValuePair<int, int>(key, value);

        if (map[hash] == null)
        {
            map[hash] = new LinkedList<(int key, int value)>() { node };
            return;
        }

        var bucket = map[hash];

        var existingNode = bucket.FirstOrDefault(n => n.Key == key);
        if (existingNode == null)
        {
            bucket.AddLast(node);
        }
        else
        {
            existingNode.Value = value;
        }
    }
    
    public int Get(int key) {
        
    }
    
    public void Remove(int key) {
        
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.Put(key,value);
 * int param_2 = obj.Get(key);
 * obj.Remove(key);
 */