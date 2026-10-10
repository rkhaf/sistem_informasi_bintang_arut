<?php
    class database{
        public array $env = [];
        public string $host;
        public string $username;
        public string $password;
        public string $database;
        public $koneksi = "";
        function __construct(){
            $envPath = __DIR__ . '/../../../.env';
            if (file_exists($envPath)) {
                $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
                
                foreach ($lines as $line) {
                    $line = trim($line);

                    // Abaikan jika baris komentar (#) atau kosong
                    if (str_starts_with($line, '#') || empty($line)) {
                        continue;
                        }
                        
                    // Pecah berdasarkan tanda '=' pertama
                    if (str_contains($line, '=')) {
                        list($key, $value) = explode('=', $line, 2);
                        
                        $key   = trim($key);
                        // Hapus tanda petik (" atau ') dan spasi di awal/akhir nilai
                        $value = trim($value, " \"'\t\n\r");

                        $this->env[$key] = $value;
                    }
                }
            }
            $this->host=$this->env['DB_HOST'] ?? "localhost";
            $this->username=$this->env['DB_USERNAME'] ?? "root";
            $this->database=$this->env['DB_DATABASE'] ?? "db_bintang_arut";
            $this->password=$this->env['DB_PASSWORD'] ?? "";

            $this->koneksi=mysqli_connect($this->host, $this->username, $this->password, $this->database);
            if(mysqli_connect_errno()){
                echo "Koneksi database gagal : ".mysqli_connect_error();
            }
        }
        function tampil_data($query){
            $sql = mysqli_query($this->koneksi, $query);
            
            // TAMBAHKAN PENGECEKAN ERROR INI
            if (!$sql) {
                die("Error Query MySQL: " . mysqli_error($this->koneksi)); 
            }

            $hasil = [];
            while($data = mysqli_fetch_array($sql)){
                $hasil[] = $data;
            }
            return $hasil;
        }

        function query_data($query){
            $sql=mysqli_query($this->koneksi,$query);
            if($sql=true){
                return true;
            }else{
                return false;
            }
        }

        function get_data($query){
            $sql=mysqli_query($this->koneksi,$query);
            return $sql->fetch_assoc();
        }
    }
?>