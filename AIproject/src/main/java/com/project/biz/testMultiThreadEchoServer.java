package com.project.biz;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;



public class testMultiThreadEchoServer {
	final static int PORT = 9400;
	static HashMap hm = new HashMap();

	public static byte[] getCommData(DataInputStream filerIn) throws IOException {
		
		byte[] sizeBuf = new byte[4];
		
		int totalLen = 0;
		int len = filerIn.read(sizeBuf);
		totalLen += len;
		while(totalLen < sizeBuf.length) {
			int noReceivedLen = sizeBuf.length - totalLen;
			len = filerIn.read(sizeBuf, totalLen, noReceivedLen);
			totalLen += len;
		}
		int size = ByteBuffer.wrap(sizeBuf).getInt();
		
		byte[] buf = new byte[size];
		totalLen = 0;
		len = filerIn.read(buf);
		totalLen += len;
		while (totalLen < size) {
			int noReceivedLen = size - totalLen;
			len = filerIn.read(buf, totalLen, noReceivedLen);
			totalLen += len;
		}
		
		return buf;
	}
	
	
	public static String byteToString(byte[] buf) {
		String converted = new String(buf, StandardCharsets.UTF_8);
		return converted;
	}
	
	public static String getClientName(Socket client) throws IOException {
		InputStream is = client.getInputStream();
		DataInputStream filerIn = new DataInputStream(is);
		byte[] buf = getCommData(filerIn);
		String name = byteToString(buf);
		return name;
	}
	
	
	public static void main(String[] args) {
		try {
			ServerSocket serverSocket = new ServerSocket(PORT);
			
			while(true) {
				System.out.println("클라이언트 접속 대기.....");
			
				Socket clientSocket = serverSocket.accept();
				
				String name = getClientName(clientSocket);
				hm.put(name, clientSocket);
				System.out.println(name + "과" + clientSocket.toString() + "를 등록");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}

class EchoThread extends Thread {
	private HashMap hm;
	private Socket socket;
	private String name;
	
	public EchoThread(HashMap hm, Socket socket, String name) {
		this.hm = hm;
		this.socket = socket;
		this.name = name;
	}
	
	public void run() {
		try {
			InetAddress inetAddr = socket.getInetAddress();  
			System.out.println(inetAddr.getHostAddress() + "로부터 접속했습니다~");
			
			InputStream in = socket.getInputStream();
			BufferedInputStream bis = new BufferedInputStream(in);
			DataInputStream fileterIn = new DataInputStream(bis);
			
			byte[] buf = new byte[4096];
			while(true) {
				int len = bis.read(buf);
				if (len <= 0) {
					System.out.println("클라이언트 접속 단절!");
					break;
				}else {
					System.out.println(inetAddr.getHostAddress() + " 클라이언트로부터 수신");
					
					if(name.equals("service")) {
						Socket serviceSocket = (Socket) this.hm.get("hairStyle");
						OutputStream out = serviceSocket.getOutputStream();
						BufferedOutputStream bos = new BufferedOutputStream(out);
						bos.write(buf, 0, len);
						bos.flush();
					}else if(name.equals("hairStyle")) {
						Socket serviceSocket = (Socket) this.hm.get("service");
						OutputStream out = serviceSocket.getOutputStream();
						BufferedOutputStream bos = new BufferedOutputStream(out);
						bos.write(buf, 0, len);
						bos.flush();
					}
				}
			}
			System.out.println(inetAddr.getHostAddress() + " 클라이엍드 접속 종료");
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	
	
	
}