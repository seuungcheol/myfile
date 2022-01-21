package com.google.gym;

import java.util.ArrayList;
import java.util.Scanner;

import com.google.gym.data.Member;
import com.google.gym.display.Title;

public class Main {
	
	public static void main(String[] args) {
		
		ArrayList<Member> members = new ArrayList<Member>();
		members.add(new Member("한승철","010", "남자"));
		members.add(new Member("조성률","010", "남자"));
		members.add(new Member("정지성","010", "남자"));
		
		System.out.println(Title.TITLE);
		
		System.out.println("명령어 입력(1.회원정보 출력, 2.회원 가입, 3.. 회원 삭제, 4.정보수정, e.프로그램 종료): ");
		
		Scanner sc = new Scanner(System.in);
		
		boolean isNotEnd = true;
		while(isNotEnd) {
			String cmd = sc.next();
			switch(cmd) {
			
			case "1":System.out.println("****회원정보 출력****");
					for(Member m:members) {
						m.info();};
						break;
				
			case "2":System.out.println("****회원 가입****");
					System.out.print("이름 :");
					String name = sc.next();
					System.out.print("연락처 :");
					String tel = sc.next();
					System.out.print("성별 :");
					String sex = sc.next();
					members.add(new Member(name,tel,sex));
					System.out.println("****회원가입 완료****");
					break;
			case "3":System.out.println("****회원 삭제****");
					 System.out.print("삭제할 회원 이름 :");
					String delName = sc.next();
					for(int i=0;i<members.size();i++) {
						if(members.get(i).getName().equals(delName)) {
							System.out.println(delName + "회원 확인");
							members.remove(i);
							System.out.println(delName + "회원 정보 삭제");
						}
					}
					break;	
					
			case "4":
					System.out.println("****회원 정보 수정****");
					System.out.println("수정할 회원 이름 :");
					String seachName = sc.next();
					int searchIndex = -1;
					
					for(int i=0;i<members.size();i++) {
						if(members.get(i).getName().equals(seachName)) {
							searchIndex = i;
							break;
						}
					}
					
					if(searchIndex == -1) {
						System.out.println(seachName + "회원은 없음.");
					} else {
						System.out.println("새 이름 입력 :");
						String editName = sc.next();
						System.out.println("새 연락처 입력 :");
						String editTel = sc.next();
						System.out.println("성별 입력 :");
						String editSex = sc.next();
						Member m = members.get(searchIndex);
						m.setName(editName);
						m.setTel(editTel);
						m.setSex(editSex);
						m.info();
					}
					break;
					
				
			case "e":System.out.println("****프로그램 종료****");
					isNotEnd = false;
					break;
					
			default:System.out.println("****다시 입력 바랍니다.****");		
			}
		}
		System.out.println("프로그램이 종료 되었습니다.");
	}

}
