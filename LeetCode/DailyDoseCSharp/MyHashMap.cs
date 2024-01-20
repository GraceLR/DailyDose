public class MyHashMap {

    class MyKVP {
        public int Key;
        public int Value;

        public MyKVP(int k, int v) {
            Key = k;
            Value = v;
        }
    }

    private const int Capacity = 10000;
    private LinkedList<MyKVP>[] map;
   
    public MyHashMap() {
        map = new LinkedList<MyKVP>[Capacity];
    }
    private int Hash(int key)
    {
        return key % Capacity;
    }

    public void Put(int key, int value) {
        var hash = Hash(key);
        var node = new MyKVP(key, value);
        if (map[hash] == null)
        {
            map[hash] = new LinkedList<MyKVP>();
            map[hash].AddLast(node);
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
        var bucket = map[Hash(key)];
        if (bucket != null)
        {
            var existingNode = bucket.FirstOrDefault(n => n.Key == key);
            if (existingNode != null)
            {
                return existingNode.Value;
            }
        }
        return -1;
    }
   
    public void Remove(int key) {
        var bucket = map[Hash(key)];
        if (bucket != null)
        {
            var existingNode = bucket.FirstOrDefault(n => n.Key == key);
            if (existingNode != null)
            {
                bucket.Remove(existingNode);
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.Put(key,value);
 * int param_2 = obj.Get(key);
 * obj.Remove(key);
 */
