public class BitCounting {
	// hay una metodo de integer que te cuenta lo bit directamente
	// Integer.Bitcount();

	public static int countBits(int n) {
		String binary = Integer.toBinaryString(n);
		int contador = 0;

		for (int i = 0; i < binary.length(); i++) {
			if (binary.charAt(i) == '1') {
				contador++;
			}
		}
		;

		return contador;
	}

	public static void main(String[] args) {
		System.out.println(countBits(1234));
	}
}